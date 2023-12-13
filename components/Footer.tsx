import * as React from 'react'

import { RiCodepenFill } from '@react-icons/all-files/ri/RiCodepenFill'
import { RiGithubFill } from '@react-icons/all-files/ri/RiGithubFill'
import { RiLinkedinFill } from '@react-icons/all-files/ri/RiLinkedinFill'
import { RiTwitterFill } from '@react-icons/all-files/ri/RiTwitterFill'

import * as config from '@/lib/config'

import styles from './styles.module.css'

// TODO: merge the data and icons from PageSocial with the social links in Footer

export const FooterImpl: React.FC = () => {
  return (
    <footer className={styles.footer}>
      {/* <div className={styles.copyright}>Copyright 2022 {config.author}</div> */}

      <div className={styles.social}>
        {config.twitter && (
          <a
            className={styles.twitter}
            href={`https://twitter.com/${config.twitter}`}
            title={`Twitter @${config.twitter}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <RiTwitterFill />
          </a>
        )}

        {config.github && (
          <a
            className={styles.github}
            href={`https://github.com/${config.github}`}
            title={`GitHub @${config.github}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <RiGithubFill />
          </a>
        )}

        {config.linkedin && (
          <a
            className={styles.linkedin}
            href={`https://www.linkedin.com/in/${config.linkedin}`}
            title={`LinkedIn ${config.author}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <RiLinkedinFill />
          </a>
        )}

        {config.codepen && (
          <a
            className={styles.linkedin}
            href={`https://codepen.io/${config.linkedin}`}
            title={`Codepen ${config.author}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <RiCodepenFill />
          </a>
        )}
      </div>
    </footer>
  )
}

export const Footer = React.memo(FooterImpl)
