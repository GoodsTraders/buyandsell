export const mapCoords = (lat, lng, callback) => {
    var obj = {};
    obj['lat'] = lat;
    obj['lng'] = lng;
    callback(lat, lng);
    return {
        type: 'ADD_COORDS',
        payload: obj
    }
}