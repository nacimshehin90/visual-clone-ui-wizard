
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface Transaction {
  icon: string;
  name: string;
  avatar?: string;
  avatarText?: string;
  type: string;
  status: 'completed' | 'pending' | 'in progress';
  amount: string;
  isPositive?: boolean;
  additionalInfo?: string;
}

const transactions: Transaction[] = [
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/5fef96f6a1464afbb033bd371ba8593b/d3202a771ceebc30f85b3cef1dcfd307cf75555f?placeholderIfAbsent=true',
    name: 'Roman Karachinsky',
    avatarText: 'RK',
    type: 'Outgoing',
    status: 'in progress',
    amount: '-USD 250.00'
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/5fef96f6a1464afbb033bd371ba8593b/8fc596bf87b51b685aa0eaf89f939fb5d5653f88?placeholderIfAbsent=true',
    name: 'Payroll',
    avatar: 'https://cdn.builder.io/api/v1/image/assets/5fef96f6a1464afbb033bd371ba8593b/c7f9a591fd6f33b162eebffc676ca877032e49e9?placeholderIfAbsent=true',
    type: 'Incoming',
    status: 'completed',
    amount: '+USD 8,000.00',
    isPositive: true
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/5fef96f6a1464afbb033bd371ba8593b/0fb8f50fa102c3f310dcfa7ff3f64cec1625d4cb?placeholderIfAbsent=true',
    name: 'Adobe Creative Cloud',
    avatar: 'https://cdn.builder.io/api/v1/image/assets/5fef96f6a1464afbb033bd371ba8593b/c66bf7fbb113e3f358ee7ca0de20f15f717c283b?placeholderIfAbsent=true',
    type: 'Outgoing | Card 1234',
    status: 'pending',
    amount: '-USD 90.00'
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/5fef96f6a1464afbb033bd371ba8593b/0fb8f50fa102c3f310dcfa7ff3f64cec1625d4cb?placeholderIfAbsent=true',
    name: 'Adidas Originals',
    avatar: 'https://cdn.builder.io/api/v1/image/assets/5fef96f6a1464afbb033bd371ba8593b/1fa5077914d3968d4205c945e752bced967a087f?placeholderIfAbsent=true',
    type: 'Outgoing | Card 1234',
    status: 'pending',
    amount: '-USD 100.00'
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/5fef96f6a1464afbb033bd371ba8593b/b8e25fc612de9304f0e87abf551eba6f4a915254?placeholderIfAbsent=true',
    name: 'Ognjen Samardzic',
    avatarText: 'OS',
    type: '',
    status: 'completed',
    amount: '-USD 250.00'
  }
];

const StatusBadge: React.FC<{ status: Transaction['status'] }> = ({ status }) => {
  const styles = {
    completed: 'bg-[#9AEBBF]',
    pending: 'bg-[#FFE6BF]',
    'in progress': 'bg-[#FFE6BF]'
  };

  return (
    <div className={`items-stretch rounded flex flex-col justify-center ${styles[status]} px-2 py-1`}>
      <div className="text-[#363636] self-stretch gap-1">
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </div>
    </div>
  );
};

export const TransactionTable: React.FC = () => {
  return (
    <section className="border border-[color:var(--Neutral-400,#EBEBEB)] w-full overflow-hidden mt-7 p-6 rounded-lg border-solid max-md:max-w-full max-md:px-5">
      <div className="flex w-full items-center gap-[40px_100px] justify-between flex-wrap max-md:max-w-full">
        <h2 className="text-black text-2xl font-semibold leading-none self-stretch my-auto">
          Recent transactions
        </h2>
        <button className="text-[#363636] self-stretch border border-[color:var(--Neutral-600,#C9C9C9)] gap-2 text-base font-medium text-center my-auto px-4 py-2 rounded-lg border-solid">
          View all
        </button>
      </div>

      <div className="w-full mt-4 max-md:max-w-full">
        <div className="text-black text-base font-semibold max-md:max-w-full">
          Today
        </div>
        <div className="w-full overflow-hidden mt-2 max-md:max-w-full">
          {transactions.map((transaction, index) => (
            <div key={index} className="flex min-h-20 w-full items-center overflow-hidden flex-wrap rounded-lg max-md:max-w-full">
              <div className="justify-center items-stretch border-b-[color:var(--Neutral-400,#EBEBEB)] bg-white self-stretch flex flex-col w-[118px] my-auto border-b border-solid">
                <div className="flex w-full flex-col items-stretch justify-center pl-5 pr-8 py-4 max-md:pr-5">
                  <div className="flex w-full items-center gap-2.5">
                    <div className="items-center border border-[color:var(--Neutral-400,#EBEBEB)] self-stretch flex w-12 gap-2.5 h-12 bg-neutral-50 my-auto p-3 rounded-[100px] border-solid">
                      <img src={transaction.icon} alt="" className="aspect-[1] object-contain w-6 self-stretch my-auto" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="justify-center items-stretch border-b-[color:var(--Neutral-400,#EBEBEB)] bg-white self-stretch flex min-w-60 min-h-20 flex-col flex-1 shrink basis-[0%] my-auto border-b border-solid max-md:max-w-full">
                <div className="flex w-full flex-col items-stretch justify-center flex-1 pl-5 pr-8 py-4 max-md:max-w-full max-md:pr-5">
                  <div className="flex w-full gap-3 flex-wrap max-md:max-w-full">
                    <Avatar className="h-12 w-12 shrink-0">
                      {transaction.avatar ? (
                        <AvatarImage src={transaction.avatar} alt={transaction.name} />
                      ) : null}
                      <AvatarFallback className="bg-[#363636] text-white">
                        {transaction.avatarText}
                      </AvatarFallback>
                    </Avatar>
                    <div className="min-w-60 flex-1 shrink basis-6 max-md:max-w-full">
                      <div className="text-[#363636] text-xl font-medium leading-[1.4] max-md:max-w-full">
                        {transaction.name}
                      </div>
                      {transaction.type && (
                        <div className="text-[#5E5E5E] text-sm font-normal leading-none max-md:max-w-full">
                          {transaction.type}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="justify-center items-stretch border-b-[color:var(--Neutral-400,#EBEBEB)] bg-white self-stretch flex min-h-20 flex-col text-xs text-[#363636] font-normal text-center leading-none w-[120px] my-auto border-b border-solid">
                <div className="flex w-full flex-col items-stretch justify-center pl-5 pr-8 py-4 max-md:pr-5">
                  <div className="w-full">
                    <StatusBadge status={transaction.status} />
                  </div>
                </div>
              </div>

              <div className={`justify-center items-stretch border-b-[color:var(--Neutral-400,#EBEBEB)] bg-white self-stretch flex min-h-20 flex-col text-xl font-medium text-right leading-[1.4] w-60 my-auto border-b border-solid ${transaction.isPositive ? 'text-[#3CB775]' : 'text-[#363636]'}`}>
                <div className="flex w-full flex-col items-stretch justify-center flex-1 pl-5 pr-8 py-4 max-md:pr-5">
                  <div className="w-full">
                    {transaction.amount}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
