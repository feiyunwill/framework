import * as std from "tstl";
import { Promisify } from "../../protocol/Promisify";

export type IVector = Promisify<std.Vector<number>>;
export namespace IVector
{
	export async function main(driver: IVector): Promise<void>
	{
		let mySum: number = 0;
		let serverSum: number = 0;

		for (let i: number = 0; i < 10; ++i)
		{
			let val: number = std.randint(1, 10);

			mySum += val;
			await driver.push_back(val);
		}

		for (let i: number = 0; i < await driver.size(); ++i)
			serverSum += await driver.at(i);

		if (mySum !== serverSum)
			throw new std.DomainError("Error on function returning.");
	}
}