from time import sleep

def sleep_3():
    sleep(3)
    print('wake up')

print('Start sleeping')
sleep_3()
print('End of program')
# blocking
# sleep은 블로킹한 함수
