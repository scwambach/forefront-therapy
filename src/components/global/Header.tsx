'use client'
import {
  Button,
  Dropdown,
  Container,
  Flex,
  Heading,
  LinkObject,
  Box,
} from '@wambach-dev/react-library'
import {
  GlobalProps,
  ImageObjectProps,
} from '@wambach-dev/react-library/src/utils/types'
import Image from 'next/image'
import { useState } from 'react'

export const Header = ({
  menu,
  title,
  logo,
}: {
  menu: GlobalProps['navigation']
  title: GlobalProps['siteTitle']
  logo?: ImageObjectProps
}) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Box elementTag="header" className="wdrlscw-header">
      <Container>
        <Flex
          ariaLabel="Main Navigation"
          columnBreak="none"
          role="navigation"
          elementTag="nav"
          alignItems="center"
          justifyContent="space-between"
        >
          <Heading level={1} nonHeadingElement="p">
            <LinkObject href="/" ariaLabel={title}>
              {logo ? (
                <Image
                  className="logo"
                  src={logo.src as string}
                  blurDataURL={logo.blurDataURL}
                  width={logo.width}
                  height={logo.height}
                  alt=""
                />
              ) : (
                title
              )}
            </LinkObject>
          </Heading>

          <Flex
            elementTag="ul"
            alignItems="center"
            className={`unstyled mainNav${menuOpen ? ' open' : ''} `}
          >
            {menu.map((item) => (
              <li key={item.href}>
                {item.subNav ? (
                  <Dropdown
                    unstyled
                    href={item.href}
                    label={item.label}
                    items={item.subNav}
                  />
                ) : item.href ? (
                  <Button unstyled type={item.type} href={item.href}>
                    {item.label}
                  </Button>
                ) : (
                  <span>{item.label}</span>
                )}
              </li>
            ))}
          </Flex>
          <Button
            unstyled
            type="button"
            className={`navToggle${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
            <Box className="srOnly">
              <span>Toggle Menu</span>
            </Box>
          </Button>
        </Flex>
      </Container>
    </Box>
  )
}
