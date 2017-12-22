import * as TYPES from './types';

// skip login

const toggoleToday = (uuid) => ({type: TYPES.TOGGOLE_TODAY, uuid: uuid});

export {toggoleToday};