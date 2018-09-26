import axios from 'axios';

const ENDPOINT = '/api/alarm';

export default {
  getAlarmsSent: () => axios.get(ENDPOINT),
  createAlarmSent: (name) => axios.post(ENDPOINT, { name })
};
