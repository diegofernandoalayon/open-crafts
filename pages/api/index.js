export default function handler (req, res) {
  console.log(req.method)
  res.status(200).json({
    '/hello': 'http://localhost:3000/api/hello',
    seafret: true
  })
}
