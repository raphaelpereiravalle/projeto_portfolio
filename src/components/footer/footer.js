import React from 'react';
import { Row } from 'react-materialize';

const Footer = (props) => (
    <footer class="page-footer grey darken-2">
        <div class="container ">
            <Row>
                <div class="col l6 s12">
                    <h5 class="white-text">Raphael Pereira Valle</h5>
                    <p class="grey-text text-lighten-4"></p>
                </div>
            </Row>
        </div>
        <div class="footer-copyright">
            <div class="container">
                © {props.date} Copyright Text
                <a class="grey-text text-lighten-4 right" href="#!"></a>
            </div>
        </div>
    </footer>
);

export default Footer;


{/*
<Footer
className="example"
copyrights="&copy 2015 Copyright Text"
links={<ul><li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li><li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li><li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li><li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li></ul>}
moreLinks={<a className="grey-text text-lighten-4 right" href="#!">More Links</a>}
>
<h5 className="white-text">
  Footer Content
</h5>
<p className="grey-text text-lighten-4">
  You can use rows and columns here to organize your footer content.
</p>
</Footer>

*/}