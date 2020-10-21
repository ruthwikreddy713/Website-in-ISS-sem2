var counter = 1;
    gallery = ["https://scontent.fmaa8-1.fna.fbcdn.net/v/t1.0-1/p720x720/81900554_10157980967113485_9213975077907857408_o.png?_nc_cat=100&_nc_ohc=lrl5L8sFkLkAX93L-jt&_nc_ht=scontent.fmaa8-1.fna&oh=4e3a5f851573a14993cdd0e96f8791af&oe=5E8FFCFC", "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/2KL6JYQYH4I6REYMIWBYVUGXPI.jpg&w=1440", "https://i2.wp.com/jpbound.com/wp-content/uploads/2019/08/cover.jpeg?resize=720%2C482&ssl=1", "https://image.shutterstock.com/z/stock-photo-bangkok-thailand-september-a-batman-action-figure-from-famous-dc-comic-1177784380.jpg", "https://s4.scoopwhoop.com/anj/493437499.jpg"],
    rotateGallery = function () {
        document.getElementById("ImgGallery").src = gallery[counter];
        counter++;
        if (counter >= gallery.length) {
            counter = counter%5;
        }
    };