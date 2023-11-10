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

type contactMeReceivedEmailProps = {
  userFirstName: string,
  userLastName:string,
  emailSubject?: string,
  emailMessage?:string,
  phoneNumber : string,
  email : string,
  purposeOfEmail : string

}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';



export default function ReceivedEmail({
    userFirstName ,
    userLastName ,
    emailSubject,
    emailMessage ,
    phoneNumber ,
    email,
    purposeOfEmail
}:contactMeReceivedEmailProps) {

  return (
    <Html>
        <Head>
          <title>{`${userFirstName+userLastName}-${emailSubject}`}</title>
        </Head>
        <Preview>{purposeOfEmail}</Preview>
        <Body style={main}>
        <Container>
            <Section style={content}>
           
            <Row style={{ ...boxInfos, paddingBottom: '0' }}>
                <Column>
                <Heading 
                as='h3'
                style={{fontWeight:'normal'}}
  
                >
                  Dear Mr Fabio,
                </Heading>
                <Text style={paragraph}>
                {emailMessage}
                </Text>
                <Text style={{...paragraph,marginTop: 10 }}>
                You can reach the person through below contacts: 
                <br></br>
                <span style={contactInfo}>{`Phone: ${phoneNumber}`}</span>
                <br></br>
                <span style={contactInfo}>{`Email Address: ${email}`}</span>
                </Text>
  
                <Text style={{ ...paragraph, marginTop: -5 }}>
                    Best Regards, <br></br> Your Personal Website
                </Text>
  
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
  

const main = {
  backgroundColor: '#fff',
  fontFamily:
  '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};


const content = {
  border: '1px solid rgb(0,0,0, 0.1)',
  borderRadius: '3px',
  overflow: 'hidden',
};

const boxInfos = {
  padding: '20px 40px',
};

const contactInfo = {
  fontWeight : "bold"
}
