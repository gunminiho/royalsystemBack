const express = require("express");
const server = express();
require("dotenv").config();
const router = require("./routes/index");

const { PORT } = process.env || 3000;

// Configurar middleware
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

/*router.use(express.json());
router.use(cors());
router.use(bodyParser.json());
router.use(cookieParser());
router.use(morgan("dev"));*/
router.use("/",router);

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    });