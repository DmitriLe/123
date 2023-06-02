import React, { Component } from 'react'

export class Categories extends Component {
    
    constructor(props) {
        super(props) 
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Все'
                },
                {
                    key: 'author',
                    name: 'Авторские'
                }
            ]
        }
    }

    render() {
    return (
      <div className=''>

      </div>
    )
  }
}

export default Categories