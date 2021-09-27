import react from 'react';
import { Container, Row,Col } from 'react-bootstrap';
function About (){
    return(
        <div className="about">
            <Container>
            <Row>
               {/* <div className="column1"> */}
               <Col>
 <header>
    

            <div id="column" >
            
                <div id="row" >
                    <h1><b>Bassant Ayman fathey</b></h1>
                    <h5><b>My fav pic is:</b></h5>
                    <img src='data:image/jpeg;base64,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'/>
                </div>
            </div>
        </header>
    <main >
        <ul><h2>Education</h2>
            <li>
             Student at faculty of science sim department level 4.
            </li>
        </ul>
       
     
    </main>
     
     
    {/* </div> */}
    </Col>
    {/* <div className="column"> */}
    <Col>
 <header>
    
          
            <div id="column2" >
            
                <div id="row" >
                    <h1><b>Rowan Mahmoud Amin</b></h1>
                    <h5><b>My fav pic is:</b></h5>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb5JMuBcIXldkj45Fvq_C-U04xCgVD81RFmA&usqp=CAU"/>
                </div>
            </div>
        </header>
    <main >
        <ul><h2>Education</h2>
            <li>
             Student at faculty of science sim department level 4.
            </li>
        </ul>
       
     
    </main>
     
{/*      
    </div> 
    */}
    </Col>
    </Row>
    </Container>
        </div>
    );
}
export default About;