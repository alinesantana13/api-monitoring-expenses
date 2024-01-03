const aws = require('aws-sdk');

const endpoint = new aws.Endpoint(process.env.ENDPOINT_S3);

const s3 = new aws.S3({
    endpoint,
    credentials: {
        accessKeyId: process.env.KEY_ID,
        secretAccessKey: process.env.APP_KEY
    }
});

const uploadFile = async (path, buffer, mimetype) => {
    const image = await s3.upload({
        Bucket: process.env.KEY_NAME,
        Key: path,
        Body: buffer,
        ContentType: mimetype
    }).promise();

    return {
        url: image.Location,
        path: image.Key
    }
};

const deleteImage = async (path) =>{
    await s3.deleteObject({
        Bucket: process.env.KEY_NAME,
        Key: path
    }).promise()
};

module.exports = {uploadFile, deleteImage};

