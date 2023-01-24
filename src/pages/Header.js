import '../css/Navbar.css';

function Header() {
    return (<div>

        <div className="car_div" id="demo" class="carousel slide" data-ride="carousel">
            <ul class="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" class="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
                <li data-target="#demo" data-slide-to="3"></li>
                <li data-target="#demo" data-slide-to="4"></li>
            </ul>

            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={require('../images/top1.jpg')} alt="" />
                </div>
                <div class="carousel-item">
                    <img src={require('../images/top2.jpg')} alt="" />
                </div>
                <div class="carousel-item">
                    <img src={require('../images/top3.jpg')} alt="" />
                </div>
                <div class="carousel-item">
                    <img src={require('../images/top4.jpg')} alt="" />
                </div>
                <div class="carousel-item">
                    <img src={require('../images/top5.jpg')} alt="" />
                </div>

            </div>

            <a class="carousel-control-prev" href="#demo" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#demo" data-slide="next">
                <span class="carousel-control-next-icon"></span>
            </a>

        </div>
    </div>
    )
}

export default Header;