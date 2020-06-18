/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="https://www.tajriy.com"
                target="_blank"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="https://www.tajriy.com"
                target="_blank"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="https://www.tajriy.com"
                target="_blank"
              >
                Blog
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Tajriy Creative Studio{" "}
        
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
