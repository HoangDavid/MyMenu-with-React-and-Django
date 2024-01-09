import './Home.css'

function Home(){
    return (
        <span>
            <div class="container">
                <div class="header">
                    <div class="item"><i class="logo"></i></div>
                    <div class="item">Community</div>
                    <div class="item">Make your own</div>
                    <div class="item">FAQ</div>
                    <div class="item">
                        <i class="search-icon"></i>
                        <input id="search" type="text" placeholder="search for templates"></input>
                    </div>
                    <div class="item"><i class="profile"></i></div>
                </div>
            </div>

            
            <div class="container">
                <div class="slider">
                    <div class="slide-item">
                        <img id="card1"/>
                    </div>
                </div>
            </div>
        </span>
    )
}


export default Home