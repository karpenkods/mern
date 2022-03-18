import React, { useContext, useEffect, useState } from 'react'
import { useHttp } from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'
import { useHistory } from 'react-router-dom'

export const CreatePage = () => {
  const history = useHistory()
  const auth = useContext(AuthContext)
  const { request } = useHttp()
  const [link, setLink] = useState('')

  useEffect(() => {
    window.M.updateTextFields()
  }, [])

  const pressHandler = async (event) => {
    if (event.key === 'Enter') {
      try {
        const data = await request(
          '/api/link/generate',
          'POST',
          { from: link },
          {
            Authorization: `Bearer ${auth.token}`,
          },
        )
        history.push(`/detail/${data.link._id}`)
      } catch (e) {}
    }
  }

  return (
    <div>
      <h3>Здесь может быть любой проект</h3>
          <img src="https://gagz.ru/wp-content/uploads/2020/11/screenshot_20201125-174508__01-1024x963.jpg" alt="Картинка" />
    </div>
  )
}
