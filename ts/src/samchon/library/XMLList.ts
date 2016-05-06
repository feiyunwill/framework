namespace samchon.library
{
	/**
	 * <p> List of XML(s) having same tag. </p>
	 *
	 * @author Jeongho Nam <http://samchon.org>
	 */
	export class XMLList
		extends std.Vector<XML>
	{
		/**
		 * <p> Default Constructor. </p>
		 */
		constructor() 
		{
			super();
		}

		public getTag(): string
		{
			if (this.size() == 0)
				return null;
			else
				return this.at(0).getTag();
		}

		/**
		 * <p> Convert XMLList to string. </p>
		 *
		 * @param level Level(depth) of the XMLList.
		 */
		public toString(level: number = 0): string 
		{
			let str: string = "";
			
			for (let i: number = 0; i < this.size(); i++)
				str += this.at(i).toString(level) + "\n";

			return str;
		}

		/**
		 * <p> Convert XMLList to HTML string. </p>
		 * 
		 * @param level Level(depth) of the XMLList.
		 */
		public toHTML(level: number = 0): string
		{
			let str: string = "";

			for (let i: number = 0; i < this.size(); i++)
				str += this.at(i).toHTML(level) + "<br>\n";

			return str;
		}
	}
}