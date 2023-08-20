import {createReadStream, createWriteStream} from "fs";
import { Transform } from "stream";

const writeStream = createWriteStream("test1.txt");

const readStream = createReadStream("test.txt");

const transform = new Transform({
    transform(chunk, encoding, callback) {
        callback(null, chunk.toString().toUpperCase());
    }
})

readStream.pipe(transform).pipe(writeStream);


