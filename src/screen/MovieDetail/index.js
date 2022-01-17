import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text, Image, Pressable} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Card} from 'react-native-elements';
import DatePicker from 'react-native-date-picker';
import {Select} from 'native-base';
import {getDataMovieById} from '../../stores/actions/movie';
import styles from './style';

import Footer from '../../components/Footer';
import ebvid from '../../assets/img/ebuid.png';
// import cineone from '../../assets/img/cineone.png';
// import hiflix from '../../assets/img/hiflix.png';

function MovieDetail({navigation, route}) {
  const dispatch = useDispatch();

  const [date, setDate] = useState(new Date(Date.now()));
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState('');
  const [data, setData] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [selectedSchedule, setSelectedSchedule] = useState({
    time: '',
    id_schedule: '',
    premiere: '',
    location: '',
    price: '',
  });
  let [language, setLanguage] = React.useState();

  const getMovieById = async () => {
    dispatch(getDataMovieById(route.params.movieId)).then(res => {
      setData(res.value.data.data[0]);
    });
  };

  const handleBook = () => {
    navigation.navigate('Order');
  };

  useEffect(() => {
    getMovieById();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.movieImage}>
        <Image
          source={
            data.image
              ? {
                  uri: `http://192.168.1.5:3001/uploads/movie/${data.image}`,
                }
              : require('../../assets/img/defaultMovie.jpg')
          }
          style={styles.movieImageItem}
        />
      </View>
      <View style={styles.movieDesc}>
        <Text style={styles.movieDescTitle}>{data.name}</Text>
        <Text style={styles.movieDescGenre}>{data.category}</Text>
      </View>
      <View style={styles.movieDescItem}>
        <View style={styles.movieDescItemList}>
          <Text style={styles.itemListTitle}>Release Date</Text>
          <Text style={styles.itemListDesc}>
            {new Date(data.releaseDate).toDateString()}
          </Text>
        </View>
        <View style={styles.movieDescItemList}>
          <Text style={styles.itemListTitle}>Directed by</Text>
          <Text style={styles.itemListDesc}>{data.director}</Text>
        </View>
        <View style={styles.movieDescItemList}>
          <Text style={styles.itemListTitle}>Duration</Text>
          <Text style={styles.itemListDesc}>
            {data.durationHour} hrs {data.durationMinute} min
          </Text>
        </View>
        <View style={styles.movieDescItemList}>
          <Text style={styles.itemListTitle}>Casts</Text>
          <Text style={styles.itemListDesc}>{data.casts}</Text>
        </View>
      </View>
      <View style={styles.movieSynopsis}>
        <Text style={styles.movieSynopsisTitle}>Synopsis</Text>
        <Text style={styles.movieSynopsisDesc}>{data.synopsis}</Text>
      </View>
      <View style={styles.schedule}>
        <Text style={styles.scheduleTitle}>Showtime and Tickets</Text>
        <Button title="Open" onPress={() => setOpen(true)} />
        <DatePicker
          modal
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
        <View style={styles.citySchedule}>
          <Select
            placeholder="Set a city"
            selectedValue={language}
            onValueChange={itemValue => setLanguage(itemValue)}
            style={styles.formSelect}>
            <Select.Item label="Jakarta" value="jakarta" />
            <Select.Item label="Bandung" value="bandung" />
            <Select.Item label="Semarang" value="semarang" />
            <Select.Item label="Surabaya" value="surabaya" />
          </Select>
        </View>
        <Card containerStyle={styles.cardSchedule}>
          <View style={styles.scheduleImage}>
            <Image source={ebvid} style={styles.cinemaImage} />
          </View>
          <Text style={styles.cinemaAddress}>
            Whatever street No.12, South Purwokerto
          </Text>
          <Card.Divider />
          <View style={styles.scheduleTime}>
            <Pressable style={styles.timeList}>
              <Text style={styles.time}>08:30am</Text>
            </Pressable>
            <Pressable style={styles.timeList}>
              <Text style={styles.time}>08:30am</Text>
            </Pressable>
            <Pressable style={styles.timeList}>
              <Text style={styles.time}>08:30am</Text>
            </Pressable>
            <Pressable style={styles.timeList}>
              <Text style={styles.time}>08:30am</Text>
            </Pressable>
          </View>
          <View style={styles.scheduleTime}>
            <Pressable style={styles.timeList}>
              <Text style={styles.time}>08:30am</Text>
            </Pressable>
            <Pressable style={styles.timeList}>
              <Text style={styles.time}>08:30am</Text>
            </Pressable>
            <Pressable style={styles.timeList}>
              <Text style={styles.time}>08:30am</Text>
            </Pressable>
            <Pressable style={styles.timeList}>
              <Text style={styles.time}>08:30am</Text>
            </Pressable>
          </View>
          <View style={styles.schedulePrice}>
            <Text style={styles.seatDesc}>Price</Text>
            <Text style={styles.seatPrice}>$10.00/seat</Text>
          </View>
          <Button
            title="Book now"
            buttonStyle={styles.button}
            onPress={handleBook}
          />
        </Card>
        <Card containerStyle={styles.cardSchedule}>
          <View style={styles.scheduleImage}>
            <Image source={ebvid} style={styles.cinemaImage} />
          </View>
          <Text style={styles.cinemaAddress}>
            Whatever street No.12, South Purwokerto
          </Text>
          <Card.Divider />
          <View style={styles.scheduleTime}>
            <Pressable style={styles.timeList}>
              <Text style={styles.time}>08:30am</Text>
            </Pressable>
            <Pressable style={styles.timeList}>
              <Text style={styles.time}>08:30am</Text>
            </Pressable>
            <Pressable style={styles.timeList}>
              <Text style={styles.time}>08:30am</Text>
            </Pressable>
            <Pressable style={styles.timeList}>
              <Text style={styles.time}>08:30am</Text>
            </Pressable>
          </View>
          <View style={styles.scheduleTime}>
            <Pressable style={styles.timeList}>
              <Text style={styles.time}>08:30am</Text>
            </Pressable>
            <Pressable style={styles.timeList}>
              <Text style={styles.time}>08:30am</Text>
            </Pressable>
            <Pressable style={styles.timeList}>
              <Text style={styles.time}>08:30am</Text>
            </Pressable>
            <Pressable style={styles.timeList}>
              <Text style={styles.time}>08:30am</Text>
            </Pressable>
          </View>
          <View style={styles.schedulePrice}>
            <Text style={styles.seatDesc}>Price</Text>
            <Text style={styles.seatPrice}>$10.00/seat</Text>
          </View>
          <Button
            title="Book now"
            buttonStyle={styles.button}
            onPress={handleBook}
          />
        </Card>
        <View style={styles.sectionMore}>
          <View style={styles.moreLine} />
          <Pressable>
            <Text style={styles.moreText}>view more</Text>
          </Pressable>
          <View style={styles.moreLine} />
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}

export default MovieDetail;
