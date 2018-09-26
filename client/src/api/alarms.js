import axios from 'axios';

const ENDPOINT = '/api/alarm';

export default {
  getAlarmsSent: () => axios.get(ENDPOINT),
  createAlarmSent: (text) => axios.post(ENDPOINT, { text })
};
