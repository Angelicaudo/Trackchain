import Image from "next/image";
import { TbArrowBackUp } from "react-icons/tb";
import Link from 'next/link'


export default function ItemHistory({ params }: { params: { address: string, itemId: string } }) {
  const address = params.address;
  const itemId = params.itemId;
  
    return (
        <div>
          {/* successfully verified -script*/}
          <section className="flex flex-col justify-center items-center gap-8 top-10 relative">

              <div className=" shadow-2xl rounded-2xl border-2 border-red-600 w-80 sm:w-96 text-white">
                  <div className="flex flex-col justify-center items-center gap-4 py-6">
                      <div className=" flex flex-col items-center text-center border border-red-600 w-60 bg-white h-60- rounded-xl shadow-2xl">
                          <Image src="/boxImg.png" alt="" height={"200"} width={"200"} />
                      </div>
                      {/* array */}
                      <p>Item Name | Avarter-Banshee</p>
                      <p>Item ID | vaV1A1zP1ee</p>
                      <p> Current Holder | <Link href="#">1A1zP1eQ</Link>...</p>
                      <p> Listed by | <Link href="#">1A1zP1eQ</Link>...</p>

                      {/* array */}

                  </div>
                  <div className="flex flex-row justify-center p-4 gap-6">
                    <Link href={`/wallet/${address}/${itemId}/transfer`} className="bg-red-700 border-2 border-red-600 rounded-2xl px-8 py-1 text-white">TRANSFER</Link>
                    <Link href={`/wallet/${address}/`} className="shadow-2xl flex gap-3 items-center border-2 text-white border-red-600 rounded-2xl  px-8 py-2 ">BACK <span className="text-red-600 text-2xl"><TbArrowBackUp /></span></Link>
                  </div>
              </div>

          </section>

          {/* table history */}

          <section className=" flex flex-col justify-around items-center gap-14 top-32 relative">
              <div className=" shadow-2xl border-2 border-red-600 rounded-2xl px-8 py-4">
                  <div className="py-6">
                      <h1 className="text-white font-bold text-2xl">Ownership History</h1>
                  </div>


                  {/* table test */}
                  <table className="text-white ">
                      <thead className="bg-black">
                          <tr className="t">
                              <th className="w-3/12 px-4 py-2 text-left border-b">Holder <br />
                                  <a className=" font-normal" href="#">Base name</a></th>
                              <th className="w-3/12 px-4 py-2 text-left border-b">Transfer <br /> <a  className=" font-normal" href="#">date/time</a></th>
                              <th className="w-3/12 px-4 py-2 text-left border-b">Address <br /><a  className=" font-normal" href="#">From/to</a></th>
                              <th className="w-3/12 px-4 py-2 text-left  border-b">Status</th>

                          </tr>
                      </thead>

                      <tbody>
                          <tr>
                              <td className="  px-4 py-2 "><Link href="#">Avarter-Banshee</Link></td>
                              <td className=" px-4 py-2"><Link href="#">02-24/11:30pm</Link></td>
                              <td className=" px-4 py-2"><Link href="#">arbiter34pb1..
                                  1A1zP1eP5Q3...</Link></td>
                              <td className=" px-4 py-2 ">Successful</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
              <div></div>
          </section>
        </div>
    );
}