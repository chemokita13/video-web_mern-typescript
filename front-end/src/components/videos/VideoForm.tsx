import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Video } from './Video';
import { getVideo, sendVideo, updateVideo } from './VideoService';
import { useNavigate, useParams } from 'react-router-dom';

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

type AxiosData = { status: number; data?: Video };

function VideoForm() {
    const navigate = useNavigate();
    const params = useParams();

    const [VideoForm, setVideoForm] = useState<Video>({ title: '', url: '' });

    const handleInputChange = (e: InputChange) => {
        setVideoForm({ ...VideoForm, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!params.id) {
            const res = await sendVideo(VideoForm);
            if (res.status !== 200) {
                toast.error('An error happend creating this video');
                toast.success('New video added!');
                navigate('/');
            }
        } else {
            const res = await updateVideo(params.id, VideoForm);
            if (res.status !== 200) {
                toast.error('An error happend updating this video');
            } else {
                toast.success('New video updated!');
                navigate('/');
            }
        }
    };

    const loadVideoData = async (id: string) => {
        const res: AxiosData = await getVideo(id);
        if (!res.data) {
            toast.error('An error happend loading this video');
            navigate('/');
            return;
        }
        const { title, description, url } = res.data;
        setVideoForm(
            description ? { title, url, description } : { title, url },
        );
    };

    useEffect(() => {
        params.id && loadVideoData(params.id);
    }, [params]);

    return (
        <div className="row">
            <div className="col-md-4 offset-md-4">
                <div className="card">
                    <div className="card-body">
                        <div className="card-title">
                            <h1 className="text-center">
                                {params.id ? 'Update video' : 'New video'}
                            </h1>
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
                                    defaultValue={VideoForm.title}
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
                                    defaultValue={VideoForm.url}
                                />
                            </div>
                            <div className="form-group p-1">
                                <textarea
                                    name="description"
                                    rows={3}
                                    className="form-control"
                                    placeholder=" Write a description"
                                    onChange={handleInputChange}
                                    defaultValue={VideoForm.description}
                                />
                            </div>
                            <div className="form-group d-flex justify-content-center p-1">
                                <button
                                    type="submit"
                                    className="btn btn-outline-light pd-3"
                                >
                                    {params.id ? 'Update video' : 'New video'}
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
