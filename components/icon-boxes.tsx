import { DollarSign, Headset, ShoppingBag, WalletCards } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const IconBoxes = () => {
  return (
    <div>
      <Card>
        <CardContent className='grid md:grid-cols-4 gap-4 p-4'>
          <div className='space-y-2'>
            <ShoppingBag />
            <div className='text-sm font-bold'>Free Shipping</div>
            <div className='text-sm text-muted-foreground'>
              Miễn phí vận chuyển cho đơn hàng trên 100.000đ
            </div>
          </div>
          <div className='space-y-2'>
            <DollarSign />
            <div className='text-sm font-bold'>Đảm bảo hoàn tiền</div>
            <div className='text-sm text-muted-foreground'>
             Trong vòng 30 ngày kể từ ngày mua
            </div>
          </div>
          <div className='space-y-2'>
            <WalletCards />
            <div className='text-sm font-bold'>Thanh toán linh hoạt</div>
            <div className='text-sm text-muted-foreground'>
             
Thanh toán bằng COD
            </div>
          </div>
          <div className='space-y-2'>
            <Headset />
            <div className='text-sm font-bold'>24/7 Support</div>
            <div className='text-sm text-muted-foreground'>
            Nhận hỗ trợ bất cứ lúc nào
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IconBoxes;
