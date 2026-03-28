import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSession } from '../context/SessionContext'
import './SessionForm.css'

export default function SessionForm() {
  const { addSession } = useSession()
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    addSession(data)
    reset()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 2000)
  }

  return (
    <div className="form-card">
      <div className="panel-title">Add session</div>

      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="field">
          <label className="label">Topic name</label>
          <input
            className={`input ${errors.topic ? 'input-error' : ''}`}
            placeholder="e.g. Dynamic programming"
            {...register('topic', { required: 'Topic is required' })}
          />
          {errors.topic && <span className="error">{errors.topic.message}</span>}
        </div>

        <div className="field">
          <label className="label">Subject</label>
          <select className="input" {...register('subject', { required: true })}>
            <option value="DSA">DSA</option>
            <option value="Web Dev">Web Dev</option>
            <option value="DBMS">DBMS</option>
            <option value="OS">OS</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="row">
          <div className="field">
            <label className="label">Duration (min)</label>
            <input
              type="number"
              className={`input ${errors.duration ? 'input-error' : ''}`}
              placeholder="min 10"
              {...register('duration', {
                required: 'Required',
                min: { value: 10, message: 'Min 10 min' },
              })}
            />
            {errors.duration && <span className="error">{errors.duration.message}</span>}
          </div>

          <div className="field">
            <label className="label">Priority</label>
            <select className="input" {...register('priority', { required: true })}>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>

        <div className="field">
          <label className="label">Date</label>
          <input
            type="date"
            className={`input ${errors.date ? 'input-error' : ''}`}
            {...register('date', { required: 'Date is required' })}
          />
          {errors.date && <span className="error">{errors.date.message}</span>}
        </div>

        <button
          type="submit"
          className={`submit-btn ${submitted ? 'submit-success' : ''}`}
        >
          {submitted ? '✓ Added!' : 'Add session'}
        </button>
      </form>
    </div>
  )
}
