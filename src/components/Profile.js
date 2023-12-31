import React from 'react'
import { Router } from '@reach/router'

import ScrollToTop from './ScrollToTop'
import Nav from './Nav'
import User from './User'
import RecentlyPlayed from './RecentlyPlayed'
import TopArtists from './TopArtists'
import TopTracks from './TopTracks'
import Playlists from './Playlists'
import Playlist from './Playlist'
import Recommendations from './Recommendations'
import Track from './Track'
import Artist from './Artist'

import styled from 'styled-components/macro'
import { theme, media } from '../styles'

const Profile = () => (
  <SiteWrapper>
    <Nav />
    <Router primary={false}>
      <ScrollToTop path='/'>
        <User path='/' />
        <RecentlyPlayed path='recent' />
        <TopArtists path='artists' />
        <TopTracks path='tracks' />
        <Playlists path='playlists' />
        <Playlist path='playlists/:playlistId' />
        <Recommendations path='recommendations/:playlistId' />
        <Track path='track/:trackId' />
        <Artist path='artist/:artistId' />
      </ScrollToTop>
    </Router>
  </SiteWrapper>
)

const SiteWrapper = styled.div`
  padding-left: ${theme.navWidth};
  ${media.tablet`
    padding-left: 0;
    padding-bottom: 50px;
  `};
`

export default Profile
