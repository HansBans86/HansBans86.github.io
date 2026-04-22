export default function Contact() {
    return (
        <section className="contact-container">
            <div className="profile-info">
                <div className="profile-picture">
                    <img src="/profile.jpg" alt="Profile"/>
                </div>
                <div className="details">
                    <h1>Name</h1>
                    <p>Location</p>
                </div>
            </div>

            <div className="contact-links">
                <p>
                    <a href="mailto:you@example.com">Email Me</a>
                </p>
                <p>
                    <a href="https://github.com/hansbans86">GitHub</a>
                </p>
            </div>
        </section>
    );
}