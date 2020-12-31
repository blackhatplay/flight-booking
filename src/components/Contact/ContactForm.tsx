import { useState } from 'react';

const ContactForm = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });

    const onNameChange = (e) => {
        setData({ ...data, name: e.target.value })
    }
    const onEmailChange = (e) => {
        setData({ ...data, email: e.target.value })
    }
    const onPhoneChange = (e) => {
        setData({ ...data, phone: e.target.value })
    }
    const onSubjectChange = (e) => {
        setData({ ...data, subject: e.target.value })
    }
    const onMessageChange = (e) => {
        setData({ ...data, message: e.target.value })
    }


    // console.log(data);
    return (
        <div className="contact-form">
            <h1>Or Send us a message</h1>

            <div className="form-wrapper">
                <form action="https://submit-form.com/IO_VzSnt1eEIuDdO3wQSE">
                    <input
                        type="hidden"
                        name="_redirect"
                        value="http://localhost:3000"
                    />
                    <div className="form-control">
                        <label htmlFor="name">Name : </label>
                        <input onChange={(e) => { onNameChange(e) }} defaultValue={data.name} name="name" type="text" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">Email : </label>
                        <input onChange={(e) => { onEmailChange(e) }} defaultValue={data.email} name="email" type="email" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="phone">Phone Number : </label>
                        <input onChange={(e) => { onPhoneChange(e) }} defaultValue={data.phone} type="tel" name="phone" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="subject">Subject : </label>
                        <input onChange={(e) => { onSubjectChange(e) }} defaultValue={data.subject} name="subject" type="text" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="message">Message:</label>
                        <textarea rows={5} onChange={(e) => { onMessageChange(e) }} defaultValue={data.message} name="message" />
                    </div>
                    <div className="form-control">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm;
