<script setup lang="ts">
import { cfaAbi, cfaAddress } from "@sfpro/sdk/abi/core";
import { useAccount, useReadContract } from "@wagmi/vue";
import { computed } from "vue";

const { chainId, isConnected } = useAccount();

const cfaAddressOnChain = computed(() => cfaAddress[chainId.value as keyof typeof cfaAddress]);

const { data, isLoading, isError } = useReadContract({
	address: cfaAddressOnChain,
	abi: cfaAbi,
	functionName: "MAXIMUM_FLOW_RATE",
	query: {
		enabled: !!cfaAddressOnChain,
	},
});
</script>

<template>
  <h2>Superfluid</h2>

  <div v-if="isConnected">
    CFA Maximum Flow Rate:
    <span v-if="!cfaAddressOnChain">CFA not deployed on this chain</span>
    <span v-else-if="isLoading">Loading...</span>
    <span v-else-if="isError">Error</span>
    <span v-else>{{ data }}</span>
  </div>
  <div v-else>
    Connect wallet to see Superfluid info.
  </div>

</template>
