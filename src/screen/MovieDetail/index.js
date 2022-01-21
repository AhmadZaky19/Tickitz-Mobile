import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  Pressable,
  TouchableHighlight,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Card} from 'react-native-elements';
import DatePicker from 'react-native-date-picker';
import {Select} from 'native-base';
import {getDataMovieById} from '../../stores/actions/movie';
import {getSchedule} from '../../stores/actions/schedule';
import styles from './style';

import Footer from '../../components/Footer';
import ebvid from '../../assets/img/ebuid.png';
import cineone from '../../assets/img/cineone.png';
import hiflix from '../../assets/img/hiflix.png';

function MovieDetail({navigation, route}) {
  const dispatch = useDispatch();
  const schedule = useSelector(state => state.schedule);

  const [date, setDate] = useState(new Date(Date.now()));
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState('');
  const [data, setData] = useState([]);
  const [schedules, setSchedules] = useState(schedule.data);
  const [selectedSchedule, setSelectedSchedule] = useState({
    time: '',
    id_schedule: '',
    premiere: '',
    location: '',
    price: '',
  });
  const [paginate, setPaginate] = useState({limit: 2, totalPage: 1});
  const [page, setPage] = useState(1);
  const [ActivePage, setActivePage] = useState(1);
  let [language, setLanguage] = React.useState();

  const getMovieById = async () => {
    dispatch(getDataMovieById(route.params.movieId)).then(res => {
      setData(res.value.data.data[0]);
    });
  };

  const getMovieSchedule = async () => {
    try {
      const response = await dispatch(
        getSchedule('', route.params.movieId, '', 'DESC', page, paginate.limit),
      );
      setSchedules(response.value.data.data);
      setPaginate({
        ...paginate,
        totalPage: response.value.data.pagination.totalPage,
      });
    } catch (error) {
      setSchedules([]);
    }
  };

  let newTotalPage = [];
  for (let i = 1; i <= paginate.totalPage; i++) {
    newTotalPage.push(i);
  }

  const changeHandlerPagination = async num => {
    const selectedPage = num;
    console.log('select page =>', selectedPage);
    setPage(selectedPage);
    getMovieSchedule();
    setActivePage(num);
  };

  const handleBook = () => {
    navigation.navigate('Order');
  };

  useEffect(() => {
    getMovieById();
    getMovieSchedule();
  }, [page, paginate.limit]);

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
        {schedules.length > 0 ? (
          schedules.map(item => (
            <Card containerStyle={styles.cardSchedule} key={item.id}>
              <View style={styles.scheduleImage}>
                <Image
                  source={
                    item.premiere === 'ebu.id'
                      ? ebvid
                      : item.premiere === 'hiflix'
                      ? hiflix
                      : cineone
                  }
                  style={styles.cinemaImage}
                />
              </View>
              <Text style={styles.cinemaAddress}>{item.location}</Text>
              <Card.Divider />
              <View style={styles.scheduleTime}>
                {item.time.map(time => (
                  <Pressable style={styles.timeList} key={time}>
                    <Text style={styles.time}>{time}</Text>
                  </Pressable>
                ))}
              </View>
              <View style={styles.schedulePrice}>
                <Text style={styles.seatDesc}>Price</Text>
                <Text style={styles.seatPrice}>${item.price}.00/seat</Text>
              </View>
              <Button
                title="Book now"
                buttonStyle={styles.button}
                onPress={handleBook}
              />
            </Card>
          ))
        ) : (
          <Text style={styles.noSchedule}>No schedule</Text>
        )}
        <View style={styles.schedulePagination_container}>
          {schedules.length > 0
            ? newTotalPage.map(num => (
                <TouchableHighlight
                  style={
                    page === num
                      ? styles.schedulePagination_Active
                      : styles.schedulePagination_Default
                  }
                  underlayColor="none"
                  onPress={() => changeHandlerPagination(num)}>
                  <Text
                    style={
                      page === num
                        ? styles.schedulePagination_title_active
                        : styles.schedulePagination_title_Default
                    }>
                    {num}
                  </Text>
                </TouchableHighlight>
              ))
            : null}
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}

export default MovieDetail;
