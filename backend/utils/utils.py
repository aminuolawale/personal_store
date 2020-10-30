from cloudinary.uploader import upload
import base64
import uuid
import os


def upload_images(images):
    urls = []
    for image in images:
        data = image.get("data")
        image_type = image.get("type").split("/")[-1]
        image_data = base64.b64decode(data)
        image_folder = os.path.join(os.getcwd(), "images")
        if not os.path.exists(image_folder):
            os.mkdir(image_folder)
        image_name = os.path.join(
            image_folder, f"{uuid.uuid4()}.{image_type}")

        with open(image_name, "wb") as img:
            img.write(image_data)
        res = upload(image_name, folder="mydev/personal_store")
        os.remove(image_name)
        urls.append(res.get("secure_url"))
    return urls
