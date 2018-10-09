import { CommunicatorBase } from "../CommunicatorBase";
import { Invoke } from "../Invoke";

export class ProcessServer<Listener extends object = {}> 
	extends CommunicatorBase<Listener>
{
	public constructor(listener: Listener = null)
	{
		super(listener);
		process.on("message", msg =>
		{
			this.replyData(JSON.parse(msg));
		});
	}

	public sendData(invoke: Invoke): void
	{
		process.send(JSON.stringify(invoke));
	}
}