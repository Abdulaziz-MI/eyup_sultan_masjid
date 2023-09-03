import './Contact.css'

function Contact() {
    return (
        <section className="contact-section" id="contact">
            <h2> Contact us</h2>

            <form className="contact-form" action="https://formsubmit.co/08ea25c5eb2711e6a2742a65b0a076ec" method="post">
                <p>For any enquires call
                    <a className="phoneNumber" href="tel:+44 000 000 000"> +44 000 000 000</a> or fill out the form.
                </p>

                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Name..." />
                <label htmlFor="topic">Topic</label>
                <input type="text" id="topic" name="topic" placeholder="Topic... "></input>

                <label htmlFor="query">Query *</label>
                <textarea id="query" name="query" placeholder="Write something..." required></textarea>

                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" placeholder="Email..."></input>

                <input type="submit" value="Submit"></input>

            </form>

        </section>
    )
}

export default Contact