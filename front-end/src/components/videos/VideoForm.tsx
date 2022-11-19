import React, { ChangeEvent, FormEvent, useState } from 'react';
import { toast } from 'react-toastify';
import { Video } from './Video';
import { sendVideo } from './VideoService';
import { useNavigate } from 'react-router-dom';

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

function VideoForm() {
  const navigate = useNavigate();

  const [VideoForm, setVideoForm] = useState<Video>({ title: '', url: '' });

  const handleInputChange = (e: InputChange) => {
    setVideoForm({ ...VideoForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await sendVideo(VideoForm);
    if (res.status !== 200) {
      console.log('holaa');
      toast.error('An error happend creiting this video');
    } else {
      toast.success('New video added!');
      navigate('/');
    }
  };

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <div className="card-title">
              <h1 className="text-center">New video</h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group p-1">
                <input
                  type="text"
                  name="title"
                  placeholder="Write a title"
                  className="form-control"
                  autoFocus
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group p-1">
                <input
                  type="url"
                  name="url"
                  placeholder="Write an url"
                  className="form-control"
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group p-1">
                <textarea
                  name="description"
                  rows={3}
                  className="form-control"
                  placeholder=" Write a description"
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group d-flex justify-content-center p-1">
                <button type="submit" className="btn btn-outline-light pd-3">
                  Create video
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoForm;
