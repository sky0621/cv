export class BasicService {
  async getBasicInfo(): any {
    const res = await prisma.basic.findMany()
    console.log(res)
    return res
  }
}
