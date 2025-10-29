import React from "react";
import Accordion from 'react-bootstrap/Accordion';

function FAQ() {
    return (
        <div id='faq'>
            <div className='row mt-5'>
                <div className='col-lg-6'><h3>FAQ</h3></div>
                <div className='col-lg-6'><p className='text-end text-muted'>Preguntas frecuentes.</p></div>
            </div>

            <Accordion className="mt-3">
                <Accordion.Item  eventKey="0">
                    <Accordion.Header >¿Incluye trámites y certificación?</Accordion.Header>
                    <Accordion.Body  className='text-muted'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion className="mt-3">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>¿Ofrecen financiamiento?</Accordion.Header>
                    <Accordion.Body className='text-muted'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion className="mt-3">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>¿Tienen despacho a regiones?</Accordion.Header>
                    <Accordion.Body className='text-muted'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default FAQ;