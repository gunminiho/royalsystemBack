const express = require("express");
const server = express();
require("dotenv").config();
const routes = require("./routes/index");

const { PORT } = process.env || 3000;

// Configurar middleware
//server.use(express.json());
//server.use(express.urlencoded({ extended: true }));

/*router.use(express.json());
router.use(cors());
router.use(bodyParser.json());
router.use(cookieParser());
router.use(morgan("dev"));*/
server.use("/", routes);

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});