import Card from '../components/Card';

function Home() {
    return (
        <div>
            <Card />
            <p style={{ color: "white" }}>⇦ Swipe Left to Reject the job</p>
            <p style={{ color: "white" }}>Swipe Right to Apply for the job ⇨</p>
        </div>
    );
}

export default Home;
