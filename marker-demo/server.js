const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const path = require('path');
const multer = require('multer');
const app = express();
const port = 5000;
const cors = require('cors');

app.use(express.json({ limit: '10mb' }));
app.use(cors());

const storage = multer.diskStorage({
  destination: 'public/uploads/',
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

app.post('/upload', async (req, res) => {
  try {
    const { base64Image,name } = req.body;

    if (!base64Image) {
      return res.status(400).send('No base64 image data provided');
    }

    const base64WithoutPrefix = base64Image.replace(/^data:image\/png;base64,/, '');
    const binaryString = Buffer.from(base64WithoutPrefix, 'base64').toString('binary');
    
    const fileName = `marked_${name}.png`;
    const filePath = path.join(__dirname, 'public/uploads', fileName);

    await fs.writeFile(filePath, binaryString, 'binary');

    res.status(200).send(`http://localhost:3000/uploads/${fileName}`);
  } catch (error) {
    console.error('Error handling file upload:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/uploadim', upload.single('image'), (req, res) => {
  res.status(200).send('Image uploaded successfully');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
