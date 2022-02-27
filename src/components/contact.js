import React from "react";
import { useRef, useState } from "react";
import { Box, Button, Label, Input, Select, Textarea, Alert, Text, Spinner } from 'theme-ui'
import BlockTitle from "./block-title";
import validator from 'validator'
import emailjs from '@emailjs/browser';

const styles = {
    textField: {
        border: 'none',
        borderRadius: '0px',
        borderBottom: '3px solid black',
    },
    boxContainer: {
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        justifySelf: 'center',
        textAlign: 'center'
    },
    blockTitle: {
        h3: {
            fontSize: ['24px', null, null, '30px', '36px', null, '48px'],
            lineHeight: ['1.44', null, null, null, null, null, '1.15'],
            lineHeight: 1.44,
            maxWidth: ['275px', '450px', null, null, '100%'],
            marginLeft: ['auto', null, null, null, '0'],
            marginRight: ['auto', null, null, null, '0'],
            whiteSpace: ['normal', null, null, null, 'pre-line'],
        },
    },
    mainDiv: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    alerts: {
        nameAlert: {
            display: 'none',
        },
        emailAlert: {
            display: 'none'
        },
        phoneAlert: {
            display: 'none'
        },
    },
    submitButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        spinner: {
            display: 'none',
            paddingLeft: '5px',
            color: 'red',
            strokeWidth: '6',
        }
    },
    successBox: {
        width: '100%',
        background: 'linear-gradient(180deg, #EBF9FF 0%, #F6F6FF 100%)',
        display: 'none',
        justifyContent: 'center',
        paddingTop: '30px',
        paddingBottom: '30px',
        text: {
            fontWeight: 'bold',
            fontSize: 4,
            padding: '5px',
        }
    }
}


const Contact = (props) => {

    const [businessName, setBusinessName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [plan, setPlan] = useState('');
    const [refresh, setRefresh] = useState(0);
    const form = useRef();

    const submitForm = () => {
        let validName = false, validEmail = false, validPhone = false;

        // Validate name 
        if (businessName !=  '') {
            styles.alerts.nameAlert.display = 'none';
            validName = true;
            setRefresh(refresh + 1);
        } else {
            styles.alerts.nameAlert.display = 'block';
            validName = false;
            setRefresh(refresh + 1);
        }
        // Validate email
        if (validator.isEmail(email)) {
            styles.alerts.emailAlert.display = 'none';
            setRefresh(refresh + 1);
            validEmail = true;
        } else {
            styles.alerts.emailAlert.display = 'block';
            setRefresh(refresh + 1);
            validEmail = false;
        }

        // Validate phone number
        var phoneRegex = /^(((067|068|069)\d{7})){1}$/;
        if (phoneRegex.test(phone)) {
            styles.alerts.phoneAlert.display = 'none';
            setRefresh(refresh + 1);
            validPhone = true;
        } else {
            styles.alerts.phoneAlert.display = 'block';
            setRefresh(refresh + 1);
            validPhone = false;
        }
        if (validName && validEmail && validPhone) {
            styles.submitButton.spinner.display = 'block';
            sendEmail();
        } else {
            return false;
        }
    }

    const sendEmail = () => {
        emailjs.sendForm("service_zki61x6", "template_k1n1bmb", form.current, "user_lApCIQ6U6LJ8zN9fdBvsU")
            .then((result) => {
                styles.boxContainer.display = 'none';
                styles.successBox.display = 'flex';
                setRefresh(30);
            }, (error) => {
            });
    };

    return (
        <div style={styles.mainDiv}>
            <Box ref={form} id="contact" as="form" onSubmit={(e) => e.preventDefault()} sx={styles.boxContainer} mb={6}>
                <BlockTitle
                    sx={styles.blockTitle}
                    tagline="Kontakt"
                    heading="Do t'ju kontaktojmë sa më shpejt të jetë e mundur!"
                />
                <Label htmlFor="user_name" > Emri i biznesit tuaj </Label>
                <Input name="user_name" id="user_name" mb={3} sx={styles.textField} placeholder='Emri' value={businessName} onInput={e => setBusinessName(e.target.value)} />
                <Alert sx={styles.alerts.nameAlert}> Emri nuk duhet të jetë bosh! </Alert>

                <Label htmlFor="user_email"> E-maili juaj </Label>
                <Input type="user_email" name="user_email" id="user_email" mb={2} sx={styles.textField} placeholder="abc@gmail.com" value={email} onInput={e => setEmail(e.target.value)} />
                <Alert sx={styles.alerts.emailAlert}> Emaili nuk është i saktë! </Alert>

                <Label htmlFor="user_phone"> Numri i telefonit </Label>
                <Input type="user_phone" name="user_phone" id="user_phone" mb={2} sx={styles.textField} placeholder='06XXXXXXXX' value={phone} onInput={e => setPhone(e.target.value)} />
                <Alert sx={styles.alerts.phoneAlert}> Numri i telefonit nuk është i saktë! </Alert>

                <Label htmlFor="user_plan"> Plani </Label>
                <Select name="user_plan" id="user_plan" mb={3} onInput={e => setPlan(e.target.value)}>
                    <option> Website me një faqe </option>
                    <option> Website me disa faqe </option>
                    <option> Dyqan Online </option>
                    <option selected> Zgjidh për mua </option>
                </Select>
                <Label htmlFor="extra_info"> Informacion ekstra (opsionale) </Label>
                <Textarea name="extra_info" id="extra_info" rows={4} mb={3} />
                <Button onClick={() => submitForm()} sx={styles.submitButton}> Kontakto <Spinner size={24} sx={styles.submitButton.spinner} /></Button>
            </Box>
            <Box sx={styles.successBox}>
                <Text sx={styles.successBox.text}>
                    Sukses! Ne do t'ju kontaktojmë në një nga format sa më shpejt të jetë e mundur.
                </Text>
            </Box>
        </div>
    )
}

export default Contact