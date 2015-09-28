#pragma once
#include <samchon/API.hpp>

#include <samchon/protocol/ExternalSystem.hpp>
#include <samchon/protocol/ServerConnector.hpp>

namespace samchon
{
	namespace protocol
	{
		class SAMCHON_FRAMEWORK_API ExternalServer
			: public virtual ExternalSystem,
			private virtual ServerConnector
		{
		private:
			typedef ExternalSystem super;

		protected:
			std::string myIP;

		public:
			/* ------------------------------------------------------------------
				CONSTRUCTORS
			------------------------------------------------------------------ */
			ExternalServer();
			virtual ~ExternalServer() = default;

			virtual void construct(std::shared_ptr<library::XML>) override;

			virtual void start() override;

			/* ------------------------------------------------------------------
				GETTERS
			------------------------------------------------------------------ */
			virtual auto getIP() const -> std::string override;
			virtual auto getPort() const -> int override;
			virtual auto getMyIP() const -> std::string override;

			/* ------------------------------------------------------------------
				EXPORTERS
			------------------------------------------------------------------ */
			virtual auto toXML() const -> std::shared_ptr<library::XML> override;
		};
	};
};