export const sendJSONResponse = (res, statusCode, payload) => {
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Access-Control-Allow-Methods','GET')
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.statusCode = 200
    res.end(JSON.stringify(payload))
}