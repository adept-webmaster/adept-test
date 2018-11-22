import React from 'react'
import PropTypes from 'prop-types'

import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'

export default class Header extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }

  toggle() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }))
  }

  renderMenuLinks() {
    const { menuLinks } = this.props
    return (
      menuLinks.map((link) => {
        if (link.childLinks !== null) {
          return (
            <UncontrolledDropdown nav inNavbar key={link.id}>
              <DropdownToggle nav caret>{link.name}</DropdownToggle>
              <DropdownMenu right>
                {link.childLinks.map(childLink => (
                  /* wrapped in a React Fragment as some items contain a divider */
                  <React.Fragment key={childLink.id}>
                    <DropdownItem className="p-0">
                      <NavLink href={childLink.link} className="py-1 px-4">
                        {childLink.name}
                      </NavLink>
                    </DropdownItem>

                    {/* if the current child has a divider */}
                    {childLink.divider && <DropdownItem divider />}
                  </React.Fragment>
                ))}
              </DropdownMenu>
            </UncontrolledDropdown>
          )
        }
        // otherwise just return a regular nav link 😊
        return (
          <NavItem key={link.id}>
            <NavLink
              // eslint-disable-next-line no-undef
              active={typeof window !== 'undefined' && window.location.pathname === link.link}
              href={link.link}
            >
              {link.name}
            </NavLink>
          </NavItem>
        )
      })
    )
  }

  render() {
    const { isOpen } = this.state
    return (
      <Navbar color="light" light expand="md" className="mb-2 mb-md-4">
        <Container>
          <NavbarBrand href="/">Adept</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {this.renderMenuLinks()}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    )
  }
}

Header.propTypes = {
  menuLinks: PropTypes.instanceOf(Array).isRequired,
}
