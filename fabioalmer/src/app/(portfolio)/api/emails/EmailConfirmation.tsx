import {
    Body,
    Button,
    Container,
    Column,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Row,
    Section,
    Text,
} from '@react-email/components';

import * as React from 'react';

type contactMeConfirmationEmailProps = {
    userFirstName?: string,
    emailSubject?: string,
    purposeOfEmail : string
}

const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : '';


export default function ConfirmationEmail({userFirstName, emailSubject, purposeOfEmail}:contactMeConfirmationEmailProps) {
    return (
    <Html>
        <Head />
        <Preview> {purposeOfEmail}</Preview>
        <Body style={main}>
        <Container>
            <Section style={content}>
           
            <Row style={{ ...boxInfos, paddingBottom: '0' }}>
                <Column>
                {/* <Img width={620} src='https://i.ibb.co/z74rz6H/Header-layout.png'/> */}
                <Heading
                    as="h2"
                    style={{
                    fontSize: 32,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    }}
                >
                    Hi {userFirstName},
                </Heading>

                <Text style={paragraph}>
                I would like to inform you that i have received your email concerning the {emailSubject}. if you have a need of urgency or i haven`t reply in a week feel free to contact me through whats app. 
                </Text>

                <Text style={{ ...paragraph, marginTop: -5 }}>
                    Kind Regards, <br></br> Fabio Almer
                </Text>

                <Img style={cupOfCoffeeImage}
                    src="https://i.ibb.co/ZNF1BN4/Email-Sit-Back-And-Enjoy-a-coffe-Finished-Transparent.png" 
                    alt='guy handing out a cup of coffee' 
                    />
 
                </Column>
                
            </Row>
            </Section>
            <Text
            style={{
                textAlign: 'center',
                fontSize: 12,
                color: 'rgb(0,0,0, 0.7)',
            }}
            >
            © 2023 | +6285814335682 | 116th and Broadway, New York, NY 10027, USA |
            Proud Indonesian | www.fabioalmer.com 
            </Text>
        </Container>
        </Body>
    </Html>
    );
}  

export const contactMeConfirmationEmail = ({
    userFirstName,
    emailSubject

}: contactMeConfirmationEmailProps) => {
    return (
        <Html>
            <Head />
            <Preview>Contact me confirmation email</Preview>
            <Body style={main}>
            <Container>
                <Section style={content}>
               
                <Row style={{ ...boxInfos, paddingBottom: '0' }}>
                    <Column>
                    {/* <Img width={620} src='https://i.ibb.co/z74rz6H/Header-layout.png'/> */}
                    <Heading
                        as="h2"
                        style={{
                        fontSize: 32,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        }}
                    >
                        Hi {userFirstName},
                    </Heading>
    
                    <Text style={paragraph}>
                    I would like to inform you that i have received your email concerning the {emailSubject}. if you have a need of urgency or i haven`t reply in a week feel free to contact me through whats app. 
                    </Text>
    
                    <Text style={{ ...paragraph, marginTop: -5 }}>
                        Kind Regards, <br></br> Fabio Almer
                    </Text>
    
                    <Img style={cupOfCoffeeImage}
                        src="https://i.ibb.co/ZNF1BN4/Email-Sit-Back-And-Enjoy-a-coffe-Finished-Transparent.png" 
                        alt='guy handing out a cup of coffee' 
                        />
     
                    </Column>
                    
                </Row>
                </Section>
                <Text
                style={{
                    textAlign: 'center',
                    fontSize: 12,
                    color: 'rgb(0,0,0, 0.7)',
                }}
                >
                © 2023 | +6285814335682 | 116th and Broadway, New York, NY 10027, USA |
                Proud Indonesian | www.fabioalmer.com 
                </Text>
            </Container>
            </Body>
        </Html>
        );
    

};

const main = {
    backgroundColor: '#fff',
    fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
    fontSize: 16,
};

const logo = {
    padding: '30px 20px',
};

const containerButton = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
};

const button = {
    backgroundColor: '#e00707',
    padding: '12px 30px',
    borderRadius: 3,
    color: '#FFF',
    fontWeight: 'bold',
    border: '1px solid rgb(0,0,0, 0.1)',
    cursor: 'pointer',
};

const content = {
    border: '1px solid rgb(0,0,0, 0.1)',
    borderRadius: '3px',
    overflow: 'hidden',
};

const boxInfos = {
    padding: '20px 40px',
};

const cupOfCoffeeImage = {
    padding: '0 0 0 40%',
    height : "366px",
    width  : "379px",
    zInde : "-1"
};
