import React from 'react'
import { Query } from 'react-apollo'
import { ROOT_QUERY } from './App'

const Users = () => 
  <Query query={ROOT_QUERY}>
    {result =>
      <p>사용자 로딩 중: {result.loading ? "네" : "아니오"}</p>
    }
  </Query>


export default Users
