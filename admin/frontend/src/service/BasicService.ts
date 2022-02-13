import axios, { AxiosResponse } from 'axios'
import { Basic } from '@/types/basic'

// import { IBasic } from '../../../types/basic'

export class BasicService {
  async get(id: number): Promise<Basic> {
    console.log('ANNNNNNNNNNNNNANNAAAAAAAAAAANnnnnnnnnnn')
    console.log(id)
    return axios
      .get(`http://localhost:3002/basic/${id}`)
      .then((res: AxiosResponse<Basic>) => {
        const data: Basic = res.data
        // リレーション情報経由で「アウトプット」一覧を取得
        // const outputRels = data.basic_output_relation
        // let outputs: Output[]
        // if (outputRels) {
        //   outputs = outputRels.map(
        //     (r) =>
        //       ({
        //         id: r.output.id,
        //         name: r.output.name,
        //         url: r.output.url,
        //         icon: r.output.icon,
        //       } as Output)
        //   )
        // }
        // // リレーション経由で「お気に入り」一覧を取得
        // const likeRels = res.data.basic_like_relation
        // let likes: Like[]
        // if (likeRels) {
        //   likes = likeRels.map(
        //     (r) =>
        //       ({
        //         id: r.like.id,
        //         name: r.like.name,
        //       } as Like)
        //   )
        // }
        // // リレーション経由で「資格」一覧を取得
        // const qualificationRels = res.data.basic_qualification_relation
        // let qualifications: Qualification[]
        // if (qualificationRels) {
        //   qualifications = qualificationRels.map(
        //     (r) =>
        //       ({
        //         id: r.qualification.id,
        //         name: r.qualification.name,
        //         org: r.qualification.org,
        //         url: r.qualification.url,
        //         date: r.qualification.date,
        //         note: r.qualification.note,
        //       } as Qualification)
        //   )
        // }

        // return {
        //   nickname: data.nickname,
        //   birthday: data.birthday,
        //   job: data.job,
        //   belongTo: data.belongTo,
        //   // outputs: outputs,
        //   // likes: likes,
        //   // qualifications: qualifications,
        // } as Basic
        return data
      })
  }

  async put(req: Basic | null): Promise<void> {
    if (req == null) {
      return
    }
    return axios
      .put(`http://localhost:3002/basic/${req.id}`, { body: req })
      .then((res) => {
        console.log(res)
      })
  }
}
