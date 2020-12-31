import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Image from "next/image";

const Destinations = () => {
    return (
        <>
            <Header id="showcase2" />
            <div className="container">
                <div className="destinations-list">
                    <div className="destination-item">
                        <h1>Italy</h1>
                        <Image src="/italy.jpg" layout="fill" objectFit="cover" />
                    </div>
                    <div className="destination-item">
                        <h1>Australia</h1>
                        <Image src="/australia.jpg" layout="fill" objectFit="cover" />
                    </div>
                    <div className="destination-item">
                        <h1>Spain</h1>
                        <Image src="/spain.jpg" layout="fill" objectFit="cover" />
                    </div>
                    <div className="destination-item">
                        <h1>Japan</h1>
                        <Image src="/japan.jpg" layout="fill" objectFit="cover" />
                    </div>
                    <div className="destination-item">
                        <h1>Indonesia</h1>
                        <Image src="/indonesia.jpg" layout="fill" objectFit="cover" />
                    </div>
                    <div className="destination-item">
                        <h1>Thailand</h1>
                        <Image src="/thailand.jpg" layout="fill" objectFit="cover" />
                    </div>
                    <div className="destination-item">
                        <h1>New Zealand</h1>
                        <Image src="/new-zealand.jpg" layout="fill" objectFit="cover" />
                    </div>
                    <div className="destination-item">
                        <h1>Brazil</h1>
                        <Image src="/brazil.jpg" layout="fill" objectFit="cover" />
                    </div>
                    <div className="destination-item">
                        <h1>Philippines</h1>
                        <Image src="/philippines.jpg" layout="fill" objectFit="cover" />
                    </div>
                    <div className="destination-item">
                        <h1>Costa Rica</h1>
                        <Image src="/costa-rica.jpg" layout="fill" objectFit="cover" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Destinations;