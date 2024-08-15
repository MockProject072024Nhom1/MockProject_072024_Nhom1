import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '../../../components/Button/Button';

function createDataContract(id, startdate, finishdate, supervior) {
  return { id, startdate, finishdate, supervior };
}

const rows = [
  createDataContract('CT001', '2024-07-29', '2024-08-01', 'Mr. John'),
  createDataContract('CT001', '2024-07-29', '2024-08-01', 'Mr. John'),
  createDataContract('CT001', '2024-07-29', '2024-08-01', 'Mr. John')
];
const Feedback = () => {
  return (
    <div className=" px-10 py-5">
      <>
        <h2 className=" font-semibold text-xl ">Contracts (1)</h2>
        <div className=" px-10">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead className=" shadow-md bg-neutral-300 ">
                <TableRow className="font-bold text-2xl">
                  <TableCell>Contract ID</TableCell>
                  <TableCell align="right">Start Date</TableCell>
                  <TableCell align="right">Finish Date</TableCell>
                  <TableCell align="right">Supervisor</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="right">{row.startdate}</TableCell>
                    <TableCell align="right">{row.finishdate}</TableCell>
                    <TableCell align="right">{row.supervior}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </>

      <div class="relative m-5 h-56  select-none rounded-lg border border-gray-100 p-6 shadow-lg">
        <p class="text-xl font-semibold">Rating</p>
        <p class="mt-3">
          Please rate your satisfaction with our service. This will be a source
          of motivation for us to improve the quality of our service in the
          future.
        </p>

        {/* three level rating */}
        <div class="mt-3 flex justify-around space-x-1">
          <div className=" flex flex-col justify-center items-center">
            <span className=" text-base font-semibold mb-1">Dissatisfied</span>

            <div class="flex h-12 w-16 cursor-pointer items-center justify-center rounded-md bg-amber-200 text-xl font-bold hover:bg-amber-400">
              😤
            </div>
          </div>

          <div className=" flex flex-col justify-center items-center">
            <span className=" text-base font-semibold mb-1">Satisfied</span>
            <div class="flex h-12 w-16 cursor-pointer items-center justify-center rounded-md bg-amber-200 text-xl font-bold hover:bg-amber-400">
              😐
            </div>
          </div>

          <div className=" flex flex-col justify-center items-center">
            <span className=" text-base font-semibold mb-1">
              Very Satisfied
            </span>
            <div class="flex h-12 w-16 cursor-pointer items-center justify-center rounded-md bg-amber-200 text-xl font-bold hover:bg-amber-400">
              😀
            </div>
          </div>
        </div>
      </div>

      {/* feed of client */}
      <div class="relative m-5 h-56  select-none rounded-lg  p-6 ">
        <p class="text-xl font-semibold">Feedback</p>
        <p class="mt-3">
          Please let us know about your experience with our service, as well as
          any questions or complaints you might have during the process. If any
          issues arise, we will make every effort to resolve them promptly.
        </p>
        <textarea
          name="feedback"
          className="resize-none border border-black rounded-xl w-full bg-gray-100 p-4 text-gray-500 outline-none focus:ring mt-3"
          id="feedback"
          placeholder="Leave a message, if you want"
        ></textarea>
      </div>
      <div className=" text-center">
        <Button name={'Save'} />
      </div>
    </div>
  );
};

export default Feedback;
