import React from "react";
import {
    Nav,
    Navbar,
    Container,
    Button,
    Image,
    Dropdown,
    NavDropdown,
    Col,
    Row,
} from "react-bootstrap";

const Navigation = () => {
    return (
        <div className="d-flex align-items-center nav">
             <Container className="eventsNav">           
            <NavDropdown
                className="align-text-top"
                title="Services"
                id="basic-nav-dropdown"
            >
                <Dropdown.Header>
                    {"  "}
                    <h5 className="pr-5 pl-5">Services</h5>
                </Dropdown.Header>

                <Dropdown.Item>
                    {/* <div className="dr-icon bg-light d-flex justify-content-center align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.997 18h-11.995l-.002-.623c0-1.259.1-1.986 1.588-2.33 1.684-.389 3.344-.736 2.545-2.209-2.366-4.363-.674-6.838 1.866-6.838 2.491 0 4.226 2.383 1.866 6.839-.775 1.464.826 1.812 2.545 2.209 1.49.344 1.589 1.072 1.589 2.333l-.002.619zm4.811-2.214c-1.29-.298-2.49-.559-1.909-1.657 1.769-3.342.469-5.129-1.4-5.129-1.265 0-2.248.817-2.248 2.324 0 3.903 2.268 1.77 2.246 6.676h4.501l.002-.463c0-.946-.074-1.493-1.192-1.751zm-22.806 2.214h4.501c-.021-4.906 2.246-2.772 2.246-6.676 0-1.507-.983-2.324-2.248-2.324-1.869 0-3.169 1.787-1.399 5.129.581 1.099-.619 1.359-1.909 1.657-1.119.258-1.193.805-1.193 1.751l.002.463z" /></svg>
                    </div> */}
                    <div>
                        <h6>Sample Posts</h6>
                        <p>Want to check out samples specific to your niche. Get free sample articles for any industry, written by our 5 star writes.</p>
                    </div>
                </Dropdown.Item>               

                <Dropdown.Item>
                    {/* <div className="dr-icon bg-light d-flex justify-content-center align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.997 18h-11.995l-.002-.623c0-1.259.1-1.986 1.588-2.33 1.684-.389 3.344-.736 2.545-2.209-2.366-4.363-.674-6.838 1.866-6.838 2.491 0 4.226 2.383 1.866 6.839-.775 1.464.826 1.812 2.545 2.209 1.49.344 1.589 1.072 1.589 2.333l-.002.619zm4.811-2.214c-1.29-.298-2.49-.559-1.909-1.657 1.769-3.342.469-5.129-1.4-5.129-1.265 0-2.248.817-2.248 2.324 0 3.903 2.268 1.77 2.246 6.676h4.501l.002-.463c0-.946-.074-1.493-1.192-1.751zm-22.806 2.214h4.501c-.021-4.906 2.246-2.772 2.246-6.676 0-1.507-.983-2.324-2.248-2.324-1.869 0-3.169 1.787-1.399 5.129.581 1.099-.619 1.359-1.909 1.657-1.119.258-1.193.805-1.193 1.751l.002.463z" /></svg>
                    </div> */}
                    <div>
                        <h6>Topic ideation</h6>
                        <p>Want to write content, but stuck for topic ideas? Get ten free topics specifical to your business emailed straight to your inbox.</p>
                    </div>
                </Dropdown.Item>             

                <Dropdown.Item>
                    {/* <div className="dr-icon bg-light d-flex justify-content-center align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.997 18h-11.995l-.002-.623c0-1.259.1-1.986 1.588-2.33 1.684-.389 3.344-.736 2.545-2.209-2.366-4.363-.674-6.838 1.866-6.838 2.491 0 4.226 2.383 1.866 6.839-.775 1.464.826 1.812 2.545 2.209 1.49.344 1.589 1.072 1.589 2.333l-.002.619zm4.811-2.214c-1.29-.298-2.49-.559-1.909-1.657 1.769-3.342.469-5.129-1.4-5.129-1.265 0-2.248.817-2.248 2.324 0 3.903 2.268 1.77 2.246 6.676h4.501l.002-.463c0-.946-.074-1.493-1.192-1.751zm-22.806 2.214h4.501c-.021-4.906 2.246-2.772 2.246-6.676 0-1.507-.983-2.324-2.248-2.324-1.869 0-3.169 1.787-1.399 5.129.581 1.099-.619 1.359-1.909 1.657-1.119.258-1.193.805-1.193 1.751l.002.463z" /></svg>
                    </div> */}
                    <div>
                        <h6>Content audit</h6>
                        <p>Written epic content, but it’s not get the eyeballs you need? Enter the URL and target keywords, and will send you actionable tips to improve your SERP positions.</p>
                    </div>
                </Dropdown.Item>                

                <Dropdown.Item>
                    {/* <div className="dr-icon bg-light d-flex justify-content-center align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.997 18h-11.995l-.002-.623c0-1.259.1-1.986 1.588-2.33 1.684-.389 3.344-.736 2.545-2.209-2.366-4.363-.674-6.838 1.866-6.838 2.491 0 4.226 2.383 1.866 6.839-.775 1.464.826 1.812 2.545 2.209 1.49.344 1.589 1.072 1.589 2.333l-.002.619zm4.811-2.214c-1.29-.298-2.49-.559-1.909-1.657 1.769-3.342.469-5.129-1.4-5.129-1.265 0-2.248.817-2.248 2.324 0 3.903 2.268 1.77 2.246 6.676h4.501l.002-.463c0-.946-.074-1.493-1.192-1.751zm-22.806 2.214h4.501c-.021-4.906 2.246-2.772 2.246-6.676 0-1.507-.983-2.324-2.248-2.324-1.869 0-3.169 1.787-1.399 5.129.581 1.099-.619 1.359-1.909 1.657-1.119.258-1.193.805-1.193 1.751l.002.463z" /></svg>
                    </div> */}
                    <div>
                        <h6>Content ROI calculator</h6>
                        <p>Love the idea of content marketing, but not sure it’s viable? Use our free content marketing ROI calculator to find out now.</p>
                    </div>
                </Dropdown.Item>
            </NavDropdown>
             <a href="/case-study" className="nav-link" role="button">
                Blog
            </a>
            <a href="/blog" className="nav-link" role="button">
                Case Study
            </a>
            </Container>
        </div>
    );
}
export default Navigation;