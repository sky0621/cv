import axios from 'axios'
import { Basic, Like, Output, Qualification } from '@/types/basic'

export class BasicService {
  async get(id: number): Promise<Basic> {
    return axios.get(`http://localhost:3002/basic/${id}`).then((res) => {
      // リレーション情報経由で「アウトプット」一覧を取得
      const outputRels = res.data.basic_output_relation
      let outputs: Output[]
      if (outputRels) {
        outputs = outputRels.map(
          (r) =>
            ({
              id: r.output.id,
              name: r.output.name,
              url: r.output.url,
              icon: r.output.icon,
            } as Output)
        )
      }
      // リレーション経由で「お気に入り」一覧を取得
      const likeRels = res.data.basic_like_relation
      let likes: Like[]
      if (likeRels) {
        likes = likeRels.map(
          (r) =>
            ({
              id: r.like.id,
              name: r.like.name,
            } as Like)
        )
      }
      // リレーション経由で「資格」一覧を取得
      const qualificationRels = res.data.basic_qualification_relation
      let qualifications: Qualification[]
      if (qualificationRels) {
        qualifications = qualificationRels.map(
          (r) =>
            ({
              id: r.qualification.id,
              name: r.qualification.name,
              org: r.qualification.org,
              url: r.qualification.url,
              date: r.qualification.date,
              note: r.qualification.note,
            } as Qualification)
        )
      }

      return {
        nickname: res.data.nickname,
        birthday: res.data.birthday,
        job: res.data.job,
        belongTo: res.data.belongTo,
        outputs: outputs,
        likes: likes,
        qualifications: qualifications,
      } as Basic
    })
  }

  async put(req: Basic): Promise<void> {
    return axios
      .put(`http://localhost:3002/basic/${req.id}`, { body: req })
      .then((res) => {
        console.log(res)
      })
  }
}
